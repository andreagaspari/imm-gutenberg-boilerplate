import { registerBlockType } from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

import { 
    useBlockProps 
} from '@wordpress/block-editor';

import block from '../block.json';

registerBlockType( block.name, {
    title: __(block.title, 'immaginificio'),
    description: __(block.description, 'immaginificio'),
    attributes: {
        blockId: {
            type: 'string'
        }
    },
    edit: ( props ) => {
        const {
            clientId
		} = props;

        props.setAttributes({ blockId: clientId });
        
        const blockProps = useBlockProps();

        return <span { ...blockProps }>{__('Your block content goes here', 'immaginificio')}</span>;
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        
        return <span { ...blockProps }>{__('Your block content goes here', 'immaginificio')}</span>;
    }
    
} );