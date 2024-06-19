'use client';

import {ChevronLeftIcon} from '@radix-ui/react-icons';
import {usePathname, useRouter} from 'next/navigation';

import {Button} from '@/shared/ui/button';

export const GoBack = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleGoBack = () => router.back();

    if (pathname !== '/')
    return (
        <Button onClick={handleGoBack} size="icon" variant="ghost">
            <ChevronLeftIcon />
        </Button>
    );
};
