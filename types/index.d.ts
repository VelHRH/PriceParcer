export interface IFilter {
 link: string;
 title: string;
 price: string;
 normalPrice: string;
 website: string;
 lastScraped: Date;
}

export interface IFilters {
 data: IFilter[];
}
