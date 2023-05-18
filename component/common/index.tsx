import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from './Style';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

export function HrefTargetBlank({ url, text }: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" style={Style.violet}>
      {text || url}
    </a>
  );
}
