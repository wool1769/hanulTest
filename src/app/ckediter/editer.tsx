'use client'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
import { useState } from 'react';

export default function CKeditor(){
    const [consText, setText] = useState("");

    return(
        <div>
            <CKEditor
                        editor={ ClassicEditor }
                        // config={{plugins: [Base64UploadAdapter]}}
                        data={consText}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setText(data)
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                            
                        } }
                    />



            
        </div>
    )
    

}