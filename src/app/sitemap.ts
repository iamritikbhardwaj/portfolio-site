import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://codecraftedlabs.co.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://codecraftedlabs.co.in/card',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://codecraftedlabs.co.in/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://codecraftedlabs.co.in/sms-terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://codecraftedlabs.co.in/relieflink',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://codecraftedlabs.co.in/relieflink/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://codecraftedlabs.co.in/relieflink/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
