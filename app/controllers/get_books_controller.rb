class GetBooksController < ApplicationController
def books
  begin
    @resp = Faraday.get 'https://api.nytimes.com/svc/books/v3/lists.json' do |req|
      req.params['api-key'] = 'cdNc4siI7f2SvnV1uAFTa77wcTbF77tv'
      req.params['list'] = 'trade-fiction-paperback'
    end
    body = JSON.parse(@resp.body)

    if @resp.success?

      @books = body["results"].map{|book|
      {
        title: book["book_details"][0]["title"],
        author: book["book_details"][0]["author"],
        description: book["book_details"][0]["description"],

      }}
      render json: @books
    else
      @error = ["errors"][0]
    end

  end

end
end

# best_seller_date: book["bestsellers_date"],
#   rank: book["rank"],
#   weeks_on_list: book["weeks_on_list"],
#   review: book["reviews"][0]["book_review_link"],
#   isbns: book["isbns"][0]["isbn10"],
#   amazon_url: book["amazon_product_url"]
