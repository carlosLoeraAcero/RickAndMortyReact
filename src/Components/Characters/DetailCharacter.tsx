import { useParams } from "react-router";
import { useFetch } from "../../Hooks/useFetch";
import { onlyCharacter } from "../../types";
import { Loader } from "../Loader";
import { Container, Row, Col, Card, CardInner, ImageWrapper, CardImage, CardContent, CardTitle, CardText } from './styledDetail';

type Params = {
    id: string;
  };

export const DetailCharacter = () => {
    let params = useParams<Params>();
    const { data, isLoading, error } = useFetch<onlyCharacter>(`https://rickandmortyapi.com/api/character/${params.id}`)

    console.log(data?.name)

    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardInner>
                            <ImageWrapper>
                                <CardImage
                                src={data?.image}
                                alt={data?.name}
                                />
                            </ImageWrapper>
                            <CardContent>
                                <CardTitle>{data?.name}</CardTitle>
                                <CardText>Especie: {data?.species}</CardText>
                                <CardText>Género: {data?.gender}</CardText>
                                <CardText>Origen: {data?.origin.name}</CardText>
                                <CardText>Dirección: {data?.location?.name}</CardText>
                            </CardContent>
                        </CardInner>
                    </Card>
                </Col>
                {isLoading && <Loader />}
            </Row>
        </Container>

    )
}