import { useParams } from 'react-router-dom';

import Blog1 from '../Blog1/Blog1';
import Blog2 from '../Blog2/Blog2';
import Blog3 from '../Blog3/Blog3';
import Blog4 from '../Blog4/Blog4';
import Blog5 from '../Blog5/Blog5';
import Blog6 from '../Blog6/Blog6';
import Blog7 from '../Blog7/Blog7';
import Blog8 from '../Blog8/Blog8';
import Blog9 from '../Blog9/Blog9';
import Blog10 from '../Blog10/Blog10';
import Blog11 from '../Blog11/Blog11';
import Blog12 from '../Blog12/Blog12';
import Blog13 from '../Blog13/Blog13';
import Blog14 from '../Blog14/Blog14';
import Blog15 from '../Blog15/Blog15';
import Blog16 from '../Blog16/Blog16';
import Blog17 from '../Blog17/Blog17';
import Blog18 from '../Blog18/Blog18';
import Blog19 from '../Blog19/Blog19';
import Blog20 from '../Blog20/Blog20';
import Blog21 from '../Blog21/Blog21';
import Blog22 from '../Blog22/Blog22';
import Blog23 from '../Blog23/Blog23';
import Blog24 from '../Blog24/Blog24';
import Blog25 from '../Blog25/Blog25';
import Blog26 from '../Blog26/Blog26';
import Blog27 from '../Blog27/Blog27';
import Blog28 from '../Blog28/Blog28';
import Blog29 from '../Blog29/Blog29';
import Blog30 from '../Blog30/Blog30';





export default function BlogId() {

    const { blogId } = useParams();

    const blogComponents = {
        1: <Blog1 />,
        2: <Blog2 />,
        3: <Blog3 />,
        4: <Blog4 />,
        5: <Blog5 />,
        6: <Blog6 />,
        7: <Blog7 />,
        8: <Blog8 />,
        9: <Blog9 />,
        10: <Blog10 />,
        11: <Blog11 />,
        12: <Blog12 />,
        13: <Blog13 />,
        14: <Blog14 />,
        15: <Blog15 />,
        16: <Blog16 />,
        17: <Blog17 />,
        18: <Blog18 />,
        19: <Blog19 />,
        20: <Blog20 />,
        21: <Blog21 />,
        22: <Blog22 />,
        23: <Blog23 />,
        24: <Blog24 />,
        25: <Blog25 />,
        26: <Blog26/>,
        27: <Blog27/>,
        28: <Blog28/>,
        29: <Blog29/>,
        30: <Blog30/>,
    };

    const selectedBlog = blogComponents[blogId];

    return (
        <>
            <div>
                {selectedBlog || <p>Blog não encontrado</p>}
            </div>
        </>
    )
}