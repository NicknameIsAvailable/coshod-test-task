import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {Card, CardContent, CardFooter} from '@/shared/ui/card';
import {AspectRatio} from '@/shared/ui/aspect-ratio';
import {Badge} from '@/shared/ui/badge';
import {Button} from '@/shared/ui/button';

import {ICarCardProps} from '../model';

export const CarCard: FC<ICarCardProps> = ({data}) => {
    return (
            <Card>
                <CardContent className="pt-5">
                    {!data || !data.image || !data.id || !data.brand || !data.model ?
                        <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl flex justify-center items-center">
                            <span className="text-xl">Нет картинки</span>
                        </AspectRatio>
                        :
                        <AspectRatio ratio={16 / 9} className="relative bg-muted rounded-xl flex justify-center items-center">
                            {data.tarif.length > 0 &&
                                <div className="flex gap-1 flex-wrap absolute top-0 left-0 p-2 rounded-xl">
                                    {data.tarif.map(item => <Badge key={item}>{item}</Badge>)}
                                </div>
                            }
                            <Image width={4000} height={4000} src={data.image} alt={String(data.id)}
                                   className="rounded-xl"/>
                        </AspectRatio>
                    }
                </CardContent>
                <CardFooter>
                    <div className="flex w-full gap-2 justify-between items-center">
                        <h2 className="text-xl font-bold">{data.brand} {data.model}</h2>
                        <Link href={`/cars/${data.id}`}>
                            <Button>
                                Подробнее
                            </Button>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
    );
};
