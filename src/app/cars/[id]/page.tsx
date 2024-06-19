import React, {FC} from 'react';

import {CarPage} from '@/views/car-page/ui';
import {ICarPageParams} from '@/views/car-page/model';

const Page: FC<ICarPageParams> = ({ params }) => {
    return (
        <CarPage params={params} />
    );
};

export default Page;
