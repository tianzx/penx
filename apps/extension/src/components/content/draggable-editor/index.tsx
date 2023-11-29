import { XCircle } from 'lucide-react'
import React, { forwardRef, useState } from 'react'
import { Rnd } from 'react-rnd'

import * as styles from '../content.module.css'

export interface IDraggableEditorRef {
  onSave: () => Promise<void>
}

interface DraggableEditorProps {
  destroySelectArea: () => void
}

const DraggableEditor = forwardRef<IDraggableEditorRef, DraggableEditorProps>(
  function ScreenShotComponent(props, propsRef) {
    const [doc, setDoc] = useState<string>('')
    const { destroySelectArea } = props

    const handleChange = (event) => {
      setDoc(event.target.value)
    }

    const onSubmit = () => {
      console.log('Submit doc:', doc)
    }

    return (
      <div className={styles.draggableContainer}>
        <Rnd
          default={{
            x: window.innerWidth - 470,
            y: 20,
            width: 450,
            height: 260,
          }}
          minWidth={280}
          minHeight={240}
          maxWidth={800}
          maxHeight={480}
          bounds="window"
          className={styles.rndContainer}>
          <div className={styles.editorContainer}>
            <div className={styles.editorTop}>
              <XCircle
                style={{ cursor: 'pointer' }}
                color="#000000"
                size={20}
                onClick={() => destroySelectArea()}
              />
            </div>

            <textarea
              style={{
                flex: 4,
                width: '100%',
                boxSizing: 'border-box',
                outline: 'none',
                border: '1px solid ghostwhite',
                background: '#f9f9f9',
                color: '#262626',
              }}
              value={doc}
              onChange={handleChange}
              placeholder="Enter your content..."
            />

            <div className={styles.editorBottom}>
              <button className={styles.editorBtn} onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </Rnd>
      </div>
    )
  },
)

DraggableEditor.displayName = 'DraggableEditor'

export default DraggableEditor
