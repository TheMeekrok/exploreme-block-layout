const defaultSignatureIconPath = './icons/default_signature.svg'

interface SignatureIconProps {
  avatar: string | null
}

export function SignatureIcon({ avatar }: SignatureIconProps) {
  return (
    <img className="w-7 h-7 rounded-full" src={ avatar || defaultSignatureIconPath } alt="" />
  )
}