import supertest from 'supertest';
import {app} from '../index.js';
import should from 'should';

// UNIT TEST BEGIN
describe('Bookmarks API test', function () {
    this.timeout(120000);
    
    // TEST 1 - RETURN A COLLECTION OF JSON DOCUMENTS
    it('should return collection of JSON documents', function (done) {
        supertest(app)
            .get('/api/bookmarks')
            .expect('Content-type', /json/)
            .expect(200) // THIS IS A HTTP RESPONSE
            .then(res => {
                // HTTP STATUS SHOULD BE 200
                res.should.have.property('status').equal(200);
                done();
            });
    });

    // TEST 2 - ADD A BOOKMARK
    it('should add a bookmark', function (done) {
        // POST TO api/bookmarks
        supertest(app)
            .post('/api/bookmarks')
            .send({
                title: 'Google5',
                link: 'www.google5.com',
                visits:0
            })
            .expect('Content-type', /json/)
            .expect(201)
            .then ((res) => {
                res.status.should.equal(201);
                res.body.should.have.property('_id');
                res.body.title.should.equal('Google5');
                done();
            });
    });

    // TEST 3 - DELETE A BOOKMARK
    it('should delete a bookmark', () => {
    return  supertest(app)
            .get('/api/bookmarks')
            .expect('Content-type', /json/)
            .expect(200).then( (res) => {
                const id=res.body[0]._id;
                return supertest(app).delete(`/api/bookmarks/${id}`).expect(204); 
            }).then( (res) => {
                res.status.should.equal(204);  
            });
    });

});