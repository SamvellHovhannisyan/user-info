import {useEffect, useState} from "react";

import {MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane} from "mdb-react-ui-kit";
import {Loading} from "./Loading";
import {getAlbumPhotos, getUserAlbums} from "../redux/user/action";
import {connect} from "react-redux";

export function CurrentAlbum(props) {
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleBasicClick = (value) => {
        if (value !== activeAlbum)
            getAlbumImages(value);
    };

    useEffect(() => {
        props.getUserAlbums(props.userId)
    }, [props.userId])

    useEffect(() => {
        if (props.userAlbums && props.userAlbums.length) {
            getAlbumImages(props.userAlbums[0].id);
        }
    }, [props.userAlbums])

    const getAlbumImages = (albumId) => {
        setLoading(true)
        setActiveAlbum(albumId);
        props.getAlbumPhotos(albumId)
        setTimeout(() => setLoading(false), 800)

    }
    return (
        <>
            <h1 className='text-center m-5 text-bg-info'>Albums</h1>

            <MDBTabs className='mb-3'>
                {
                    props.userAlbums.map((album) =>
                        <MDBTabsItem key={album.id}>
                            <MDBTabsLink onClick={() => handleBasicClick(album.id)} active={activeAlbum === album.id}>
                                {album.title.slice(0, 5)}
                            </MDBTabsLink>
                        </MDBTabsItem>
                    )
                }

            </MDBTabs>

            <MDBTabsContent>
                {
                    props.userAlbums.map((album) =>
                        <MDBTabsPane key={album.id} show={activeAlbum === album.id}>
                            {loading ?
                                <Loading/> :
                                props.albumPhotos.map((photo) =>
                                    <img key={photo.id} className='m-2' src={photo.thumbnailUrl} alt=""/>)}

                        </MDBTabsPane>
                    )
                }
            </MDBTabsContent>

        </>

    )
}


function mapStateToProps(state) {
    return {
        userAlbums: state.user.userAlbums,
        albumPhotos: state.user.albumPhotos
    }
}

const mapDispatchToProps = dispatch => ({
    getUserAlbums: (params) => dispatch(getUserAlbums(params)),
    getAlbumPhotos: (params) => dispatch(getAlbumPhotos(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentAlbum)