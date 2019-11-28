import React, { useState } from 'react';
import useDocxTemplater from '../useDocxTemplater';
import ImageManager from './ImageManager';
import Drawing from '../Drawing';
import Inline from '../Inline';
import Extent from '../Extent';
import EffectExtent from '../EffectExtent';
import DocProperties from '../DocProperties';
import NonVisualGraphicFrameDrawingProperties from '../NonVisualGraphicFrameDrawingProperties';
import GraphicFrameLocks from '../drawingml/GraphicFrameLocks';
import Graphic from '../drawingml/Graphic';
import GraphicData from '../drawingml/GraphicData';
import Picture from '../drawingml/Picture';
import NonVisualPictureProperties from '../drawingml/NonVisualPictureProperties';
import PictureLocks from '../drawingml/PictureLocks';
import NonVisualDrawingProperties from '../drawingml/NonVisualDrawingProperties';
import BlipFill from '../drawingml/BlipFill';
import Blip from '../drawingml/Blip';
import BlipExtensionList from '../drawingml/BlipExtensionList';
import BlipExtension from '../drawingml/BlipExtension';
import UseLocalDpi from '../drawingml/UseLocalDpi';
import SourceRectangle from '../drawingml/SourceRectangle';
import Stretch from '../drawingml/Stretch';
import FillRectangle from '../drawingml/FillRectangle';
import ShapeProperties from '../drawingml/ShapeProperties';
import Transform2D from '../drawingml/Transform2D';
import Offset from '../drawingml/Offset';
import PresetGeometry from '../drawingml/PresetGeometry';
import AdjustValueList from '../drawingml/AdjustValueList';
import NoFill from '../drawingml/NoFill';
import Outline from '../drawingml/Outline';
import Extents from '../drawingml/Extents';
import NonVisualPictureDrawingProperties from '../drawingml/NonVisualPictureDrawingProperties';

interface Props {
  /**
   * 指定图片内容。
   */
  data: string | Blob | Buffer;
  children?: never;
  width?: number;
  height?: number;
}

let i = 0;

const nextId = () => {
  i += 1;
  return i;
};

const convertPixelsToEmus = (pixel: number) => {
  return Math.round(pixel * 9525);
};

/**
 * 图片
 *
 * 参考文档：
 */
const Image: React.SFC<Props> = ({ data, width = 150, height = 150 }) => {
  const { docxTemplater, xmlDocuments } = useDocxTemplater();
  const [id] = useState(nextId);
  const name = `image_generated_${id}.png`;
  const [refId] = useState(() =>
    new ImageManager(docxTemplater.zip, xmlDocuments).addImageRels(name, data),
  );
  const x = convertPixelsToEmus(width);
  const y = convertPixelsToEmus(height);

  return (
    <Drawing>
      <Inline>
        <Extent cx={x} cy={y} />
        <EffectExtent />
        <DocProperties
          id={`${id}`}
          name={name}
          descr="这是由智能表单插入的图片"
        />
        <NonVisualGraphicFrameDrawingProperties>
          <GraphicFrameLocks noChangeAspect />
        </NonVisualGraphicFrameDrawingProperties>

        <Graphic>
          <GraphicData>
            <Picture>
              <NonVisualPictureProperties>
                <NonVisualDrawingProperties
                  id="0"
                  name="图形1"
                  descr="这是由智能表单插入的图片"
                />
                <NonVisualPictureDrawingProperties>
                  <PictureLocks noChangeAspect noChangeArrowheads />
                </NonVisualPictureDrawingProperties>
              </NonVisualPictureProperties>
              <BlipFill>
                <Blip embed={`rId${refId}`}>
                  <BlipExtensionList>
                    <BlipExtension>
                      <UseLocalDpi val={false} />
                    </BlipExtension>
                  </BlipExtensionList>
                </Blip>
                <SourceRectangle />
                <Stretch>
                  <FillRectangle />
                </Stretch>
              </BlipFill>

              <ShapeProperties bwMode="auto">
                <Transform2D>
                  <Offset x={0} y={0} />
                  <Extents cx={x} cy={y} />
                </Transform2D>
                <PresetGeometry preset="rect">
                  <AdjustValueList />
                </PresetGeometry>
                <NoFill />
                <Outline>
                  <NoFill />
                </Outline>
              </ShapeProperties>
            </Picture>
          </GraphicData>
        </Graphic>
      </Inline>
    </Drawing>
  );
};

export default Image;
