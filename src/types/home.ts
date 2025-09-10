
interface User {
    uuid: string;
    name: string;
    img_user: string | null; // có thể null
}

interface Category {
    uuid: string;
    name: string;
}
interface Post {
    uuid: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    thumbnail_url: string | null;
    author_id: number;
    category_id: number | null;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    canonical_url: string | null;
    og_image: string | null;
    published_at: string; // nếu muốn chuẩn ISO date có thể ép thành Date
    status: string;
    updated_at: string; // hoặc Date nếu parse ra
    ref_auth: User;
    ref_category: Category | null;
    like_count: number,
    view_count: number
}

interface Meta {
    items: Post[];
    limit: number;
    page: number;
    last_page: number;
}

export interface ResponseHomeApi {
    code: number,
    message: string,
    meta: Meta
}
