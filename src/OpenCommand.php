<?php

namespace Drupal\ng_featherlight;

use Drupal\Core\Ajax\CommandInterface;

/**
 * Defines an AJAX command to open content in a colorbox.
 */
class OpenCommand implements CommandInterface {

  /**
   * The content for the colorbox.
   *
   * @var string
   */
  protected $content;

  /**
   * Constructs an OpenCommand object.
   *
   * @param string $content
   *   The content that will be placed in the colorbox.
   */
  public function __construct($content) {
    $this->content = $content;
  }

  /**
   * Render.
   *
   * {@inheritdoc}.
   */
  public function render() {
    return [
      'command' => 'featherlightLoadOpen',
      'data' => $this->content,
    ];
  }

}
