import React from 'react';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import Image from './components/image/Image';

const imageBuffer = readFileSync(resolve(__dirname, 'images/image1.png'));

const image = <Image data={imageBuffer} width={200} height={200} />;

export default image;
