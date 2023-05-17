import { format } from 'date-fns';
import type { RequestHandler } from '@sveltejs/kit';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';
import getListPages from './getListPages';

export const GET: RequestHandler = async ({ setHeaders }) => {
	// -----------------------------------
	// Beverage lists pages
	const { month, year } = await getLatestMonth();

	const lastMod = format(new Date(year, month), 'yyyy-MM-dd');
	const listPages = getListPages({ month, year });

	const beverageListsPages = `
	  <url>
	    <loc>https://hop.land</loc>
	    <lastmod>${lastMod}</lastmod>
	  </url>
    <url>
      <loc>https://hop.land/en</loc>
      <lastmod>${lastMod}</lastmod>
    </url>
	  ${listPages.map(
			({ month, year }) => `
	    <url>
	      <loc>https://hop.land/list/${year}-${month.toString().padStart(2, '0')}</loc>
	      <lastmod>${lastMod}</lastmod>
	    </url>
      <url>
        <loc>https://hop.land/en/list/${year}-${month.toString().padStart(2, '0')}</loc>
        <lastmod>${lastMod}</lastmod>
      </url>
	  `
		)}
	`;

	// -----------------------------------
	// Beverage details pages

	// 	const beverageDetailsArray = await basics
	// 		.find(
	// 			{},
	// 			{
	// 				projection: {
	// 					_id: 0,
	// 					added: 1,
	// 					badge: 1,
	// 					'brand.badge': 1,
	// 					shortId: 1
	// 				}
	// 			}
	// 		)
	// 		.toArray();
	//
	// 	const beverageDetailsPages = beverageDetailsArray.map(
	// 		({ added, badge, brand, shortId }) => `
	//     <url>
	//       <loc>https://hop.land/details/${shortId}/${brand.badge}/${badge}</loc>
	//       <lastmod>${format(new Date(added), 'yyyy-MM-dd')}</lastmod>
	//     </url>
	//   `
	// 	);

	// -----------------------------------
	// Static pages

	// const staticPages = `
	//   <url>
	//     <loc>https://hop.land/about</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats/styles</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats/ingredients/water</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats/ingredients/malt</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats/ingredients/hop</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats/ingredients/yeast</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	//   <url>
	//     <loc>https://hop.land/stats/ingredients/addition</loc>
	//     <lastmod>${format(new Date(lastAddedBeverage.added), 'yyyy-MM-dd')}</lastmod>
	//   </url>
	// `;

	setHeaders({
		'Content-Type': 'application/xml'
	});

	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${beverageListsPages}
      </urlset>
    `.trim()
	);
};
