<?php
/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2019 Heimrich & Hannot GmbH
 *
 * @author  Thomas Körner <t.koerner@heimrich-hannot.de>
 * @license http://www.gnu.org/licences/lgpl-3.0.html LGPL
 */


namespace HeimrichHannot\TinySliderBundle\ConfigElementType;


use HeimrichHannot\ReaderBundle\ConfigElementType\ReaderConfigElementData;
use HeimrichHannot\ReaderBundle\ConfigElementType\ReaderConfigElementTypeInterface;
use HeimrichHannot\TinySliderBundle\Asset\FrontendAssets;
use HeimrichHannot\TinySliderBundle\Element\ContentGallery;
use HeimrichHannot\TinySliderBundle\Frontend\Gallery;
use HeimrichHannot\TinySliderBundle\Model\TinySliderConfigModel;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Twig\Environment;

class TinySliderConfigElementType implements ReaderConfigElementTypeInterface
{
    /**
     * @var ContainerInterface
     */
    private $container;
    /**
     * @var Environment
     */
    private $twig;
    /**
     * @var FrontendAssets
     */
    private $frontendAssets;

    public function __construct(ContainerInterface $container, Environment $twig, FrontendAssets $frontendAssets)
    {
        $this->container = $container;
        $this->twig = $twig;
        $this->frontendAssets = $frontendAssets;
    }


    /**
     * Return the reader config element type alias.
     *
     * @return string
     */
    public static function getType(): string
    {
        return 'tiny_slider';
    }

    /**
     * Return the reader config element type palette.
     *
     * @return string
     */
    public function getPalette(): string
    {
        return '{config_legend},tinySliderConfig,imageSelectorField,imageField,tinySliderSortBy,orderField,imgSize;';
    }

    /**
     * Update the item data.
     *
     * @param ReaderConfigElementData $configElementData
     */
    public function addToReaderItemData(ReaderConfigElementData $configElementData): void
    {
        $readerConfigElement = $configElementData->getReaderConfigElement();
        $item = $configElementData->getItem();

        if (!$readerConfigElement->tinySliderConfig || !($tinySliderConfig = TinySliderConfigModel::findByPk($readerConfigElement->tinySliderConfig))) {
            return;
        }

        if (($imageSelectorField = $readerConfigElement->imageSelectorField) && !$item->getRawValue($imageSelectorField) ||
            !($imageField = $readerConfigElement->imageField) || !$item->getRawValue($imageField)) {
            return;
        }

        $this->frontendAssets->addFrontendAssets();

        $config = [
            'tinySliderMultiSRC' => $item->getRawValue($imageField),
            'tinySliderUseHomeDir' => $item->getRawValue('tinySliderUseHomeDir'),
            'tinySliderFullsize' => $item->getRawValue('tinySliderFullsize'),
            'tinySliderNumberOfItems' => $item->getRawValue('tinySliderNumberOfItems'),
            'tinySliderCustomTpl' => $item->getRawValue('tinySliderCustomTpl'),
            'tinySliderGalleryTpl' => $item->getRawValue('tinySliderGalleryTpl'),
            'tinySliderConfig' => $tinySliderConfig->id,
        ];

        if ($item->getRawValue($readerConfigElement->orderField)) {
            $config['tinySliderOrderSRC'] = $item->getRawValue($readerConfigElement->orderField);
            $config['tinySliderSortBy'] = 'custom';
        } else {
            $config['tinySliderSortBy'] = $readerConfigElement->tinySliderSortBy;
        }

        if ($readerConfigElement->imgSize) {
            $config['tinySliderSize'] = $readerConfigElement->imgSize;
        } else {
            $config['tinySliderSize'] = $item->getFormattedValue('tinySliderSize');
        }

        $gallery = new Gallery($this->container->get('huh.tiny_slider.util.config')->createSettings($config, $tinySliderConfig));
        $galleryImages = $gallery->getImages();
        $tinySliderGallery = [
            'html' => $this->container->get('huh.utils.template')->renderTwigTemplate('tiny_slider_config_element', [
                'tinySliderSlides' => $galleryImages,
                'config' => $tinySliderConfig->id,
            ]),
            'images' => $galleryImages,
        ];
        $item->setFormattedValue($readerConfigElement->templateVariable ?: 'tinySliderGallery', $tinySliderGallery);
        $configElementData->setItem($item);
    }
}
