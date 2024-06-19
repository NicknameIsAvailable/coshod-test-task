'use client';

import {useEffect, useState} from 'react';

import {useCatalogStore} from '@/entities/catalog';
import {CarCard} from '@/widgets/home/car-card';
import {useLoadingStore} from '@/entities/loading';
import {CarCardLoading} from '@/widgets/home/car-card/ui/car-card.loading';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious,
} from '@/shared/ui/pagination';
import {scrollTop} from '@/shared/lib/utils';
import {FilterCatalog} from '@/widgets/home/filter-catalog/ui/filter-catalog.sheet';

export const Ui = () => {
    const {catalog, getCatalog, currentFilters} = useCatalogStore();
    const {isLoading} = useLoadingStore();
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        getCatalog({...currentFilters, page: currentPage});
    }, [getCatalog, currentFilters, currentPage]);

    const previousPage = () => {
        scrollTop();
        if (currentPage > 0)
            setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        scrollTop();
        if (currentPage < (catalog?.pages || 7))
            setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex flex-col gap-4">
            <FilterCatalog />
            <div className="grid grid-cols-2 gap-4">
                {!isLoading ? catalog?.list.map(car =>
                        <CarCard data={car} key={car.id}/>,
                    )
                    :
                    new Array(10).fill(null).map((_, index) => <CarCardLoading key={index}/>)
                }
            </div>
            {
                !isLoading &&
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={previousPage}/>
                        </PaginationItem>
                        {new Array(catalog?.pages).fill(null).map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink onClick={() => {
                                    scrollTop();
                                    setCurrentPage(index + 1);
                                }}
                                                isActive={index + 1 === currentPage}>{index + 1}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={nextPage}/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            }

        </div>

    );
};
