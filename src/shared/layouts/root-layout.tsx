import {FC, ReactNode} from 'react';

import {Providers} from '@/features/providers/ui';
import {Header} from '@/widgets/root/header';

export const RootLayout: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <Providers>
            <main>
                <Header />
                <section className="container mx-auto pt-16">
                    {children}
                </section>
            </main>
        </Providers>
    );
};
