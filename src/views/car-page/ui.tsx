import {FC} from 'react';
import Image from 'next/image';

import {catalogApi} from '@/entities/catalog';
import {ICar, ICatalog} from '@/shared/types';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/shared/ui/carousel';
import {convertCurrency} from '@/shared/lib/utils';
import {Badge} from '@/shared/ui/badge';
import {CarCard} from '@/widgets/home/car-card';

import {ICarPageParams} from './model';

export const CarPage: FC<ICarPageParams> = async ({params}) => {
    const data: ICar = await catalogApi.getCarById(params.id);
    const catalog: ICatalog = await catalogApi.getCatalog({brands: [data.item.brand]});

    return (
        <div className="flex flex-col gap-4 py-4">
            <div className="grid grid-cols-3 gap-8">
                {data.item.images &&
                    <div className="col-span-2 relative">
                        <div className="flex gap-2 absolute p-2 m-2 z-[2]">
                            {data.item.tarif.map((tarif, index) => <Badge key={index}>{tarif}</Badge>)}
                        </div>
                        <Carousel className="w-full">
                            <CarouselContent>
                                {data?.item?.images.map(image =>
                                    <CarouselItem key={image.id}>
                                        <Image className="rounded-2xl" width={4000} height={4000} src={image.image}
                                               alt={image.id}/>
                                    </CarouselItem>,
                                )}
                            </CarouselContent>
                            {data.item.images.length > 1 &&
                                <>
                                    <CarouselPrevious/>
                                    <CarouselNext/>
                                </>
                            }
                        </Carousel>
                    </div>
                }
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-between gap-2">
                        <h1 className="text-4xl font-bold">{data?.item?.brand} {data?.item?.model}</h1>
                        <span className="text-2xl font-bold">{convertCurrency(data?.item?.price)}</span>
                    </div>
                    <hr/>
                </div>
            </div>
            <h3 className="text-xl font-bold">Еще {data?.item?.brand}</h3>
            <Carousel>
                <CarouselContent>
                    {catalog?.list?.filter(car => car.id !== data.item.id).map(car =>
                        <CarouselItem className="basis-1/3" key={car.id}>
                            <CarCard data={car}/>
                        </CarouselItem>,
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    );
};
