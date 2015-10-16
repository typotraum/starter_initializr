<?php

/**
 * Add body classes if certain regions have content.
 */
function nothingmore_preprocess_html(&$variables) {
  if (!empty($variables['page']['featured'])) {
    $variables['classes_array'][] = 'featured';
  }

 }

  // Add conditional stylesheets for IE
  drupal_add_css(path_to_theme() . '/css/ie.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));
  drupal_add_css(path_to_theme() . '/css/ie6.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 6', '!IE' => FALSE), 'preprocess' => FALSE));


/**
 * Override or insert variables into the page template for HTML output.
 */
function nothingmore_process_html(&$variables) {
 
}

/**
 * Override or insert variables into the page template.
 */
function nothingmore_process_page(&$variables) {
}


/**
 * Override or insert variables into the node template.
 */
function nothingmore_preprocess_node(&$variables) {

}
/**
 * Override or insert variables into the node template.
 */






function nothingmore_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  $element['#attributes']['class'][] = 'menu-link' . $element['#original_link']['plid'];

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }

  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
        $count = 1;
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/**
 * Override or insert variables into the block template.
 */
function nothingmore_preprocess_block(&$variables) {
}
