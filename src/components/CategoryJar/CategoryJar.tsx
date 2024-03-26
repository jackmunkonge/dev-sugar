'use client';

import { twMerge } from 'tailwind.config';

import { JarSticker } from '@assets/images';
import { BlueJar, BrownJar, EmptyJar, GreenJar, OrangeJar, PinkJar, RedJar, YellowJar } from '@assets/images/Jars';
import { Body2 } from '@components/Typography';

import { CategoryJarProps, JarColor } from './types';

const CategoryJar: React.FC<CategoryJarProps> = ({ className = '', color = JarColor.EMPTY, stickerText }) => {
  let Jar = EmptyJar;

  switch (color) {
    case JarColor.EMPTY:
      Jar = EmptyJar;
      break;
    case JarColor.RED:
      Jar = RedJar;
      break;
    case JarColor.ORANGE:
      Jar = OrangeJar;
      break;
    case JarColor.YELLOW:
      Jar = YellowJar;
      break;
    case JarColor.GREEN:
      Jar = GreenJar;
      break;
    case JarColor.BLUE:
      Jar = BlueJar;
      break;
    case JarColor.PINK:
      Jar = PinkJar;
      break;
    case JarColor.BROWN:
      Jar = BrownJar;
      break;
    default:
      break;
  }

  const StickerText: React.FC<{ text: string }> = ({ text }) => (
    <div className="relative flex">
      <JarSticker />
      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <Body2 className="text-black line-clamp-2">{text}</Body2>
      </div>
    </div>
  );

  return (
    <div className={twMerge(className, 'relative flex')}>
      <Jar />
      {stickerText && (
        <div className="absolute inset-0 flex items-end justify-center pb-8 ">
          <StickerText text={stickerText} />
        </div>
      )}
    </div>
  );
};

export default CategoryJar;
