import { Category } from './category';

export interface Post {
  id: number;
  title: string;
  content: string;
  category: Category;
  createdDate: Date;
}



export const POSTS = [
    {
      id: 'c9f3bcb3-dd91-4d79-88d8-5b9d99d8cd20',
      title:
        'Navigating the Complexities of International Adoption: A Guide for Prospective Parents',
      content:
        'This article explores the intricacies of international adoption, including cultural considerations, legal requirements, and the challenges faced by families embarking on this journey. It offers valuable insights and practical advice for those considering adopting a child from another country.',
      createdDate: new Date('2024-03-24'),
      category: {
        id: 'cf7df5b7-f42d-424a-bec3-1547f068b4ca',
        name: 'Adoption',
      },
    },
    {
      id: 'd7e70eb3-2038-429b-86d1-3a51f8c4ff54',
      title:
        'The Transformative Power of Foster Care Adoption: Changing Lives, Building Families',
      content:
        'Foster care adoption provides permanent homes for children who have experienced trauma or neglect, offering them a chance at stability and love. This article highlights the stories of families who have embraced foster care adoption and the profound impact it has had on both the children and their new families.',
      createdDate: new Date('2024-03-24'),
      category: {
        id: 'cf7df5b7-f42d-424a-bec3-1547f068b4ca',
        name: 'Adoption',
      },
    },
    {
      id: '10e5148a-9d9a-47a6-a233-0e2087f45dad',
      title: 'Open Adoption: Nurturing Relationships Beyond Blood Ties',
      content:
        'Open adoption fosters transparency and ongoing contact between birth parents, adoptive parents, and the adopted child. This article explores the benefits of open adoption, including maintaining connections with birth families, navigating challenges, and supporting healthy relationships within the adoptive family unit.',
      createdDate: new Date('2024-03-24'),
      category: {
        id: 'cf7df5b7-f42d-424a-bec3-1547f068b4ca',
        name: 'Adoption',
      },
    },
    {
      id: '8c10e06c-c7b2-4637-8b70-74d06a8f8e74',
      title:
        'Adopting Older Children: Overcoming Challenges, Embracing Opportunities',
      content:
        'Adopting older children presents unique challenges and rewards. This article delves into the experiences of families who have adopted older children, addressing topics such as attachment, trauma-informed parenting, and the importance of providing stability and support during the transition.',
      createdDate: new Date('2024-03-24'),
      category: {
        id: 'cf7df5b7-f42d-424a-bec3-1547f068b4ca',
        name: 'Adoption',
      },
    },
  ];