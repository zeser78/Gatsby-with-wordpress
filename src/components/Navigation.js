import React from 'react';
import { Link, useStaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';

import {NavigationWrapper} from './styles/NavigationStyles';

import WhiteLogo from '../images/tango_logo_white.svg';
import CloseButton from '../images/tango_close_button.svg';

const Navigation = ({menu}) => (
<NavigationWrapper>
    <ul>
{menu.items.map((item, i) => (
    <li key={i}>
<Link to={item.url} activeClassName="nav-active">
    {item.title}
</Link>
{item.wordpress_children ? (
    <>
    <span>&#8964;</span>
    <ul>{item.wordpress_children.map((child, ichild) => (
        <li key={child}>
            <Link to={child.url} activeClassName="nav-active">
                {child.title}
            </Link>
        </li>
    ))}

    </ul>
    </>
) : null}

    </li>
))}

    </ul>
</NavigationWrapper>
)

Navigation.prototypes = {
    menu: PropTypes.object,
}

export default Navigation;