const CameraRollManager = {
  saveImageWithTag(imageTag) {
    return Promise.resolve(['/asset/url']);
  },
  getPhotos(params) {
    return Promise.resolve({
      edges: [
        {
          node: {
            type: 'image/jpeg',
            group_name: 'Camera',
            image: {
              uri: 'content://media/external/images/media/1',
              height: 2448,
              width: 3968
            },
            timestamp: 1528972673375
          }
        },
        {
          node: {
            type: 'image/jpeg',
            group_name: 'Camera',
            image: {
              uri: 'content://media/external/images/media/2',
              height: 2448,
              width: 3968
            },
            timestamp: 1528972673375
          }
        },
        {
          node: {
            type: 'image/jpeg',
            group_name: 'Camera',
            image: {
              uri: 'content://media/external/images/media/3',
              height: 2448,
              width: 3968
            },
            timestamp: 1528972673375
          }
        }
      ],
      page_info: {
        has_next_page: true,
        end_cursor: '1528919312601'
      }
    });
  }
};

module.exports = CameraRollManager;
