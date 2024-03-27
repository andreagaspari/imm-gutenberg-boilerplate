import { registerBlockType } from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

import { 
    useBlockProps 
} from '@wordpress/block-editor';

import json from '../block.json';
const { name, title, description } = json;

registerBlockType( name, {
    title: __(title, 'immaginificio'),
    description: __(description, 'immaginificio'),
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