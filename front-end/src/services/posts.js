// src/services/posts.js
import { supabase } from '../supabase';

const { data, error } = await supabase
    .from('posts')
    .select('title, content')
    .eq('id', 1); // Exemplo de consulta
    

export const fetchPosts = async () => {
    const { data, error } = await supabase
        .from('posts')
        .select('*');
    if (error) throw error;
    return data;
};

export const createPost = async (title, content) => {
    const { data, error } = await supabase
        .from('posts')
        .insert([{ title, content }]);
    if (error) throw error;
    return data;
};

if (error) {
    console.error(error);
} else {
    console.log(data);
}