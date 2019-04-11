/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import { requireNativeComponent } from 'react-native';

const RCTImagePicker = requireNativeComponent('RCTImagePicker');

const ImagePickerIOS = {
  canRecordVideos: function(callback: Function) {
    return RCTImagePicker.canRecordVideos(callback);
  },
  canUseCamera: function(callback: Function) {
    return RCTImagePicker.canUseCamera(callback);
  },
  openCameraDialog: function(
    config: Object,
    successCallback: Function,
    cancelCallback: Function,
  ) {
    config = {
      videoMode: false,
      ...config,
    };
    return RCTImagePicker.openCameraDialog(
      config,
      successCallback,
      cancelCallback,
    );
  },
  openSelectDialog: function(
    config: Object,
    successCallback: Function,
    cancelCallback: Function,
  ) {
    config = {
      showImages: true,
      showVideos: false,
      ...config,
    };
    return RCTImagePicker.openSelectDialog(
      config,
      successCallback,
      cancelCallback,
    );
  },
};

module.exports = ImagePickerIOS;
