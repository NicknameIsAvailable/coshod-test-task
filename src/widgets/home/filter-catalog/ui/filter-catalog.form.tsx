import React, {useEffect, useState} from 'react';
import {SaveIcon, TrashIcon} from 'lucide-react';

import { useCatalogStore } from '@/entities/catalog';
import { Button } from '@/shared/ui/button';
import { IFilterInputs } from '@/widgets/home/filter-catalog/model';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/shared/ui/collapsible';
import {Checkbox} from '@/shared/ui/checkbox';
import {Label} from '@/shared/ui/label';
import {IModelBrand} from '@/shared/types';
import {ScrollArea} from '@/shared/ui/scroll-area';
import {Card, CardContent} from '@/shared/ui/card';


export const FilterCatalogForm = () => {
    const { filters, getFilters, currentFilters, setCurrentFilters } = useCatalogStore();
    const [tempData, setTempData] = useState<IFilterInputs>(currentFilters);

    useEffect(() => {
        getFilters();
    }, [getFilters]);

    const saveFilters = () => {
        setCurrentFilters(tempData);
    };

    const clearFilters = () => {
        const emptyData = {
            brands: [],
            models: [],
            tarifs: [],
        };
        setCurrentFilters(emptyData);
        setTempData(emptyData);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-full gap-4">
            <Collapsible className="w-full">
                <CollapsibleTrigger>
                    <Button className="w-[335px] mx-auto" variant="outline">Бренды</Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                    <Card>
                        <CardContent className="flex flex-col gap-2 w-full py-2">
                            {filters?.brands.values.map((item: string, index) =>
                                <Label className="flex gap-2" key={index}>
                                    <Checkbox
                                        checked={tempData?.brands.includes(item)}
                                        onCheckedChange={() => {
                                            if (tempData)
                                                if (!tempData?.brands.includes(item)) {
                                                    const data = {...tempData, brands: [...tempData.brands, String(item)]};
                                                    setTempData(data);
                                                } else {
                                                    const data = {...tempData, brands: tempData.brands.filter(value => value !== item)};
                                                    setTempData(data);
                                                }
                                        }}
                                    />
                                    {item}
                                </Label>,
                            )}
                        </CardContent>
                    </Card>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible className="w-full">
                <CollapsibleTrigger>
                    <Button className="w-[335px] mx-auto" variant="outline">Модели</Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 flex flex-col gap-2 w-full">
                    <Card>
                        <CardContent className="py-2">
                            <ScrollArea className="h-40">
                                <div className="flex flex-col gap-4">
                                    {filters?.models.values.map((item: IModelBrand) =>
                                        <div key={item.brand} className="flex flex-col gap-2">
                                            <Label>{item.brand}</Label>
                                            {item.models.map(model =>
                                                <Label className="flex gap-2" key={model}>
                                                    <Checkbox
                                                        checked={tempData?.models.includes(model)}
                                                        onCheckedChange={() => {
                                                            if (tempData)
                                                                if (!tempData?.models.includes(model)) {
                                                                    const data = {
                                                                        ...tempData,
                                                                        models: [...tempData.models, String(model)],
                                                                    };
                                                                    setTempData(data);
                                                                } else {
                                                                    const data = {
                                                                        ...tempData,
                                                                        models: tempData.models.filter(value => value !== model),
                                                                    };
                                                                    setTempData(data);
                                                                }
                                                        }}
                                                    />
                                                    {model}
                                                </Label>,
                                            )}
                                            <hr/>
                                        </div>,
                                    )}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible className="w-full">
                <CollapsibleTrigger>
                    <Button className="w-[335px] mx-auto" variant="outline">Тарифы</Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                    <Card>
                        <CardContent className="flex flex-col gap-2 w-full py-2">
                            {filters && Object.entries(filters.tarif.values).map((item, index) =>
                                <Label className="flex gap-2" key={index}>
                                    <Checkbox
                                        checked={tempData?.tarifs.includes(item[0])}
                                        onCheckedChange={() => {
                                            if (tempData)
                                                if (!tempData?.tarifs.includes(item[0])) {
                                                    const data = {...tempData, tarifs: [...tempData.tarifs, String(item[0])]};
                                                    setTempData(data);
                                                } else {
                                                    const data = {...tempData, tarifs: tempData.tarifs.filter(value => value !== item[0])};
                                                    setTempData(data);
                                                }
                                        }}
                                    />
                                    {item[1]}
                                </Label>,
                            )}
                        </CardContent>
                    </Card>
                </CollapsibleContent>
            </Collapsible>

            <Button onClick={saveFilters} className="w-full"><SaveIcon className="mr-2" size={16}/>Применить фильтры</Button>
            <Button onClick={clearFilters} variant="destructive" className="w-full"><TrashIcon className="mr-2" size={16}/> Очистить фильтры</Button>
        </div>
    );
};
