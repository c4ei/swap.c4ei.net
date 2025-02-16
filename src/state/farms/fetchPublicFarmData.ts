import { ChainId } from '@pancakeswap/sdk'
import erc20 from 'config/abi/erc20.json'
import chunk from 'lodash/chunk'
import { getMasterChefAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'

const fetchFarmCalls = (farm: SerializedFarm, chainId: number) => {
  const { lpAddress, token, quoteToken } = farm
  // console.log(" line 11 /src/state/farms/fetchPublicFarmData.ts fetchFarmCalls chainId : "+JSON.stringify(chainId) + "/ lpAddress :"+JSON.stringify(lpAddress) + "/ token :"+JSON.stringify(token) + "/ quoteToken :"+JSON.stringify(quoteToken) )
  return [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: lpAddress,
      name: 'balanceOf',
      params: [getMasterChefAddress(chainId)],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: token.address,
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: quoteToken.address,
      name: 'decimals',
    },
  ]
}

export const fetchPublicFarmsData = async (farms: SerializedFarmConfig[], 
  // chainId = ChainId.BSC
  chainId = ChainId.C4EI
  ): Promise<any[]> => {
  const farmCalls = farms.flatMap((farm) => fetchFarmCalls(farm, chainId))
  const chunkSize = farmCalls.length / farms.length
  const farmMultiCallResult = await multicallv2({ abi: erc20, calls: farmCalls, chainId })
  // console.log(" line 56 /src/state/farms/fetchPublicFarmData.ts fetchPublicFarmsData chainId : "+JSON.stringify(chainId))
  return chunk(farmMultiCallResult, chunkSize)
}
