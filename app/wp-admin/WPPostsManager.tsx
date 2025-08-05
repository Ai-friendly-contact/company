
'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  status: 'published' | 'draft';
  created_at: string;
  updated_at: string;
}

export default function WPPostsManager() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    // サンプルデータ
    setPosts([
      {
        id: '1',
        title: '人材紹介サービスの新機能について',
        content: '新しい機能を追加しました...',
        status: 'published',
        created_at: '2024-01-15',
        updated_at: '2024-01-15'
      },
      {
        id: '2',
        title: '転職市場の最新トレンド',
        content: '2024年の転職市場について...',
        status: 'draft',
        created_at: '2024-01-10',
        updated_at: '2024-01-12'
      }
    ]);
  }, []);

  const handleNewPost = () => {
    setIsCreating(true);
    setEditingPost({
      id: '',
      title: '',
      content: '',
      status: 'draft',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  };

  const handleSavePost = (post: Post) => {
    if (post.id) {
      setPosts(prev => prev.map(p => p.id === post.id ? post : p));
    } else {
      const newPost = { ...post, id: Date.now().toString() };
      setPosts(prev => [newPost, ...prev]);
    }
    setIsCreating(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('この投稿を削除してもよろしいですか？')) {
      setPosts(prev => prev.filter(p => p.id !== id));
    }
  };

  if (isCreating || editingPost) {
    return (
      <PostEditor
        post={editingPost}
        onSave={handleSavePost}
        onCancel={() => {
          setIsCreating(false);
          setEditingPost(null);
        }}
      />
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">投稿管理</h2>
        <button
          onClick={handleNewPost}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          新規投稿
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                タイトル
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ステータス
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                作成日
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {post.content}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    post.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status === 'published' ? '公開中' : '下書き'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString('ja-JP')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="text-blue-600 hover:text-blue-900 whitespace-nowrap cursor-pointer"
                  >
                    編集
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="text-red-600 hover:text-red-900 whitespace-nowrap cursor-pointer"
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface PostEditorProps {
  post: Post | null;
  onSave: (post: Post) => void;
  onCancel: () => void;
}

function PostEditor({ post, onSave, onCancel }: PostEditorProps) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    status: post?.status || 'draft'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post) {
      onSave({
        ...post,
        ...formData,
        updated_at: new Date().toISOString()
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          {post?.id ? '投稿編集' : '新規投稿'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            タイトル
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="投稿タイトル"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            本文
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="投稿内容を入力してください"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ステータス
          </label>
          <div className="relative">
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'published' | 'draft' })}
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
            >
              <option value="draft">下書き</option>
              <option value="published">公開</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="ri-arrow-down-s-line text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
            保存
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
}
