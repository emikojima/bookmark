class GetBooksController < ApplicationController

def books
  fetch('trade-fiction-paperback')
end

def nonfiction
  fetch('combined-print-and-e-book-nonfiction')
end

def science
  fetch('science')
end


def fetch(genre)
  begin
    @resp = Faraday.get 'https://api.nytimes.com/svc/books/v3/lists.json' do |req|
      req.params['api-key'] = ENV['NYT_KEY']
      req.params['list'] = genre
  end
    body = JSON.parse(@resp.body)
    if @resp.success?

      @books = body["results"].map{|book|
      { title: book["book_details"][0]["title"],
        author: book["book_details"][0]["author"],
        description: book["book_details"][0]["description"],
        best_seller_date: book["bestsellers_date"],
        rank: book["rank"],
        weeks_on_list: book["weeks_on_list"],
        review: book["reviews"][0]["book_review_link"],
        amazon_url: book["amazon_product_url"],
        genre: book["display_name"]
      }}
      render json: @books
    else
      @error = ["errors"][0]
    end
  end
end

end
