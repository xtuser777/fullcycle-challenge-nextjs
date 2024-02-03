import { Post } from "../models";

export class PostService {
  async findAll(): Promise<Post[]> {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      { 
        next: { 
          revalidate: 1
        }
      },
    );

    return response.json();
  }

  async findOne(id: number): Promise<Post | undefined> {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + id,
      { 
        next: { 
          revalidate: 1
        }
      },
    );

    return response.json();
  }
}