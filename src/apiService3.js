const API_URL = 'https://news-blog-92em.onrender.com/api/posts/category/Automobile'; // Update with your actual API URL

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    console.log('Fetched Posts:', data); // Log the response data
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}