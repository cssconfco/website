const getTalkType = speaker =>
  speaker?.isLightningTalk ? '⚡️ Lightning talk' : '🎙 Main talk'

export default getTalkType
