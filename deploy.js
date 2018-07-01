const Storage = require('@google-cloud/storage');
const fs = require('fs');
const projectId = 'brianfoggcom';
const bucketName = 'jspiano.brianfogg.com';
const keyFilename = 'auth/uploadtoken.json';
const buildFileLocation = './dist/';

console.log(`deploying to ${projectId}/${bucketName}`);
bucket = Storage({
  projectId,
  keyFilename,
}).bucket(bucketName);

const emptyBucket = (cb) => {
bucket.getFiles()
  .then((results) => {
    let index = 1;
    const files = results[0];
    if (files.length) {
      files.forEach((file) => {
        bucket.file(file.name).delete()
          .then(() => {
            console.log(`deleted ${file.name}`);
            index++;
            if (index === files.length) {
              cb();
            }
          });
      });
    } else {
      console.log(`empty bucket`);
      cb();
    }
  })
  .catch(console.error);
};

const uploadOptions = {
  'index.html': {
    public: true,
    metadata: {
      cacheControl: 'no-cache'
    }
  },
};

const uploadFolder = (folderName) => {
  const folderToUploadFrom2 = fs.readdirSync(`${buildFileLocation}/${folderName}/`);
  folderToUploadFrom2.forEach((file) => {
    let destination = `${folderName}/${file}`
    console.log(`upload ${folderName}`, file, destination);
    console.log('')
    bucket.upload(`${buildFileLocation}${folderName}/${file}`, { public: true, destination: destination })
      .then(() => {
        console.log(`uploaded ${file}`);
      })
      .catch((err) => {
        console.log(`upload ${folderName} err`, file,  err)
      });
  });
}

const uploadDist = () => {
    console.log('upload dist')

    const distFiles = fs.readdirSync(buildFileLocation);
    distFiles.forEach((file) => {
      if(file === 'css' || file === 'js' || file === 'audio' || file === 'audio' || file === '.DS_Store') {
        return
      }
      const options = uploadOptions[file] || { public: true };
      bucket.upload(`${buildFileLocation}${file}`,options)
      .then(() => {
        console.log(`uploaded ${file}`);
      })
      .catch((err) => {
        console.log('upload 1 err', file,  err)
      });
    });

    uploadFolder('js')
    uploadFolder('css')
    uploadFolder('images')
    // uploadFolder('audio')
    uploadFolder('audio/long')

};

emptyBucket(uploadDist);
