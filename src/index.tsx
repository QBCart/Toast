/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React from 'react';
import { render } from 'react-dom';
import Toast from './toast.js';

(function () {
  const id = 'qbc-toast';
  const toast = document.getElementById(id);
  render(
    <Toast
      id={id}
      imagesStorageUrl={
        document.getElementById('qbc-images')!.dataset.imagesStorageUrl!
      }
    />,
    toast
  );
})();
