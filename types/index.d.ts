export interface IFilter {
 link: string;
 title: string;
 price: string;
 normalPrice: string;
 website: string;
 lastScrapped: Date;
}

export interface IFilters {
 data: IFilter[];
}
