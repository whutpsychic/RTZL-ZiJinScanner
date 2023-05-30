import JSEncrypt from 'jsencrypt'
import { getPublicKey } from '@/api/publicKey'

/**
 * RSA加密
 * @param password
 * @returns {Promise<{param: PromiseLike<ArrayBuffer>}|*>}
 */
export async function encryptedData(password) {
  let publicKey = ''
  const res = await getPublicKey()
  publicKey = res.data.value
  if (publicKey == '') {
    return password
  }
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(publicKey)
  return encrypt.encrypt(password)
}
