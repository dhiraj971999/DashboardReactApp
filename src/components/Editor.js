import * as React from 'react';
import { HtmlEditor, Image, Inject, Link, Table, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import Header from './Header';
import { EditorData } from '../data/dummy';

class Editor extends  React.Component  {
  constructor() {
    super(...arguments);
    this.toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
}
  render() {
  return( 
    <div style={{padding:'1rem 1rem', backgroundColor:'white'}}>
            <Header category="App" title="Editor" />

    <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings}>
    <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar, Table]} ></Inject>
    </RichTextEditorComponent>
    </div>
  );
}
}
export default Editor;