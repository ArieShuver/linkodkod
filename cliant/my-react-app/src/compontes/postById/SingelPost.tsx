import React, { useState } from 'react'
import type { Post } from '../post/post'
import { useEffect } from 'react'
import { data, useParams } from 'react-router'
import { onePost } from '../../api/postsApi'
import ShwoPost from './ShwoPostById'
import { CheckboxGroup } from '@chakra-ui/react'

export default function SingelPost() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null)
    const [log, setLog] = useState<any>();

    useEffect(() => {
        (async () => {
            try {
                const data = await onePost(Number(id));
                console.log("data useAFFECT", data)
                setPost(data[0]);
            }
            catch (error) {
                setLog(error)
            }
        }
        )();
    }, []);

    return (
        <div>
            {post && <ShwoPost post={post} />}
            {log && <h4>{log}</h4>}
        </div >


    )
}

