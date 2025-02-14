import { avalandche, c4ei, fantomOpera, klay } from '@pancakeswap/wagmi/chains'
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains'

const VERSION = '0.0.25-mainnet.19'
const SHA384 = 'qQJSEss4ErEoxG1BxX9kq5sOqbBAn475yj7Bz8ZqNxQKDR2tvk693RdhfA0blQEF'
export const PARTNER_ID = 0x0002
export const FEE_COLLECTOR = '0x6245e28Fe45B543c1F93e65c0997114d4Ba0F39c' // 0x68C7ABB8b1c3D1cE467E28265770F3a7ECF32654
export const FEE_TENTH_BPS = '0'

export const STARGATE_JS = {
  src: `https://unpkg.com/@layerzerolabs/stargate-ui@${VERSION}/element.js`,
  integrity: `sha384-${SHA384}`,
}

export const CHAINS_STARGATE = [mainnet, arbitrum, optimism, polygon, avalandche, fantomOpera, c4ei, klay]
// export const CHAINS_STARGATE = [c4ei, klay]
