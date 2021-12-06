import React, { PropsWithChildren } from 'react';
import { Welcome } from '../Welcome/Welcome';

interface Props {
  className?: string;
}

export const App = ({ className }: PropsWithChildren<Props>) => (
  <section className={className}>
    <Welcome />
  </section>
);
