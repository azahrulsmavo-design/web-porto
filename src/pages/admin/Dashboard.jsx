import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import RevealTitle from '../../components/RevealTitle';

const Dashboard = () => {
    const { logout, user } = useAuth();
    const [projects, setProjects] = useState([]);
    const [posts, setPosts] = useState([]);
    const [view, setView] = useState('projects'); // 'projects' | 'posts'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (view === 'projects') fetchProjects();
        if (view === 'posts') fetchPosts();
    }, [view]);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('sort_order', { ascending: true })
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProjects(data || []);
        } catch (error) {
            console.error('Error fetching projects:', error);
            alert('Failed to load projects');
        } finally {
            setLoading(false);
        }
    };

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('daily_posts')
                .select('*')
                .order('published_at', { ascending: false, nullsFirst: false })
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error('Error fetching posts:', error);
            alert('Failed to load posts');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            const { error } = await supabase.from('projects').delete().eq('slug', slug);
            if (error) throw error;
            setProjects(projects.filter(p => p.slug !== slug));
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Failed to delete');
        }
    };

    const handleDeletePost = async (id) => {
        if (!window.confirm('Delete this post?')) return;
        try {
            const { error } = await supabase.from('daily_posts').delete().eq('id', id);
            if (error) throw error;
            setPosts(posts.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Failed to delete');
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Admin Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                Admin Dashboard
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-500 hidden md:block">
                                {user?.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <RevealTitle text="Dashboard" className="text-2xl font-bold text-slate-900" />
                        <div className="flex gap-4 mt-4 border-b border-slate-200">
                            <button
                                onClick={() => setView('projects')}
                                className={`pb-2 px-1 text-sm font-medium transition-colors ${view === 'projects' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => setView('posts')}
                                className={`pb-2 px-1 text-sm font-medium transition-colors ${view === 'posts' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Daily Posts
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {view === 'projects' ? (
                            <>
                                <Button href="/admin/bulk-update" variant="outline">Bulk Update</Button>
                                <Button href="/admin/projects/new">+ New Project</Button>
                            </>
                        ) : (
                            <Button href="/admin/posts/new">+ New Article</Button>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-blue-600"></div>
                    </div>
                ) : view === 'projects' ? (
                    <div className="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Project</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {project.cover_image && (
                                                    <img className="h-10 w-16 object-cover rounded mr-4 bg-slate-100" src={project.cover_image} alt="" />
                                                )}
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900">{project.title_en || 'Untitled'}</div>
                                                    <div className="text-xs text-slate-500">/{project.slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === 'published'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                            {project.category}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                to={`/admin/projects/${project.slug}/edit`}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project.slug)}
                                                className="text-red-400 hover:text-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {projects.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                                            No projects found. Create one to get started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Article</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Published</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {posts.map((post) => (
                                    <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-slate-900">{post.title_en || '(No Title)'}</div>
                                            <div className="text-xs text-slate-500 truncate max-w-xs">{post.slug}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                            {post.published_at ? new Date(post.published_at).toLocaleDateString() : '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link to={`/admin/posts/${post.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">Edit</Link>
                                            <button onClick={() => handleDeletePost(post.id)} className="text-red-400 hover:text-red-600">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {posts.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-12 text-center text-slate-500">No articles found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
