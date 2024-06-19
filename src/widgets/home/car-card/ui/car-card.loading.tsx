import {Card, CardContent, CardFooter} from '@/shared/ui/card';
import {AspectRatio} from '@/shared/ui/aspect-ratio';
import {Button} from '@/shared/ui/button';
import {Skeleton} from '@/shared/ui/skeleton';

export const CarCardLoading = () => {
    return (
        <Card>
            <CardContent className="pt-6">
                <AspectRatio ratio={16 / 9} className="relative bg-muted rounded-xl flex justify-center items-center">
                    <Skeleton />
                </AspectRatio>
            </CardContent>
            <CardFooter>
                <div className="flex w-full gap-2 justify-between items-center">
                    <Skeleton>
                        <h2 className="text-xl font-bold opacity-0">Машина</h2>
                    </Skeleton>
                    <Skeleton>
                        <Button>
                            Подробнее
                        </Button>
                    </Skeleton>
                </div>
            </CardFooter>
        </Card>
    );
};
