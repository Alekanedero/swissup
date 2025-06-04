'use client';

import { toast } from 'sonner';
import { Button } from '../ui/button';
import { PropsWithChildren } from 'react';

export const ButtonSonner = ({ children }: PropsWithChildren) => {
  return (
    <Button variant={'secondary'} onClick={() => toast('Le sonner est la ! ')}>
      {children}
    </Button>
  );
};

export const TestColor = () => {
  return (
    <div className="m-auto mt-40 flex flex-row items-center justify-center gap-4 max-lg:gap-2 max-md:flex-col">
      <Button variant={'primary'}>primary</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'accent'}>accent</Button>
      <Button variant={'destructive'}>destructive</Button>
      <ButtonSonner>SONNN</ButtonSonner>
    </div>
  );
};
