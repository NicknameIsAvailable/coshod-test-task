import {FilterIcon} from 'lucide-react';

import {Button} from '@/shared/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/shared/ui/sheet';
import {FilterCatalogForm} from '@/widgets/home/filter-catalog/ui/filter-catalog.form';

export const FilterCatalog = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" className="flex gap-2"><FilterIcon size={16} /> Фильтры</Button>
            </SheetTrigger>
            <SheetContent>
                <FilterCatalogForm />
            </SheetContent>
        </Sheet>
    );
};
