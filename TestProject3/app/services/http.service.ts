import RNFS from 'react-native-fs';

export const downloadFile = async (
  url: string,
  fileName: string
) => {
  const path = RNFS.CachesDirectoryPath + `/${fileName}`;
  return await RNFS.downloadFile({
    fromUrl: url,
    toFile: path
  }).promise.then((res: any) => {
    return res.statusCode === 200;
  }).catch((_error: any) => {
    return false;
  });
};