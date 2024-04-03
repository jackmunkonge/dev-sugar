'use client';

import { twMerge } from 'tailwind.config';

import { JarSticker } from '@assets/images';
import { BlueJar, BrownJar, EmptyJar, GreenJar, OrangeJar, PinkJar, RedJar, YellowJar } from '@assets/images/Jars';
import { Body1, Body2 } from '@components/Typography';

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
    <div className="relative flex px-4">
      <JarSticker width="100%" height="100%" />
      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <Body2 className="text-black line-clamp-2 block desktop:hidden">{text}</Body2>
        <Body1 className="text-black line-clamp-2 hidden desktop:block">{text}</Body1>
      </div>
    </div>
  );

  return (
    <div className={twMerge(className, 'relative flex')}>
      <Jar width="100%" height="100%" />
      {stickerText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <StickerText text={stickerText} />
        </div>
      )}
    </div>
  );
};

export default CategoryJar;
