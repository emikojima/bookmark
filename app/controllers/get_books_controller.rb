class GetBooksController < ApplicationController
def books
  begin
    @resp = Faraday.get 'https://api.nytimes.com/svc/books/v3/lists.json' do |req|
      req.params['api_key'] = '9f15ceb2385e41099d2c592976578ead'
      req.params['list'] = 'trade-fiction-paperback'
    end
    body = JSON.parse(@resp.body)

    if @resp.success?
      
      @books = body["results"].map{|book|
      { best_seller_date: book["bestsellers_date"],
        rank: book["rank"],
        weeks_on_list: book["weeks_on_list"],
        title: book["book_details"][0]["title"],
        author: book["book_details"][0]["author"],
        description: book["book_details"][0]["description"],
        review: book["reviews"][0]["book_review_link"],
        isbns: book["isbns"][0]["isbn10"]
      }}
      render json: @books
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
end
